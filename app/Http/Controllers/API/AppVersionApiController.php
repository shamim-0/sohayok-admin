<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AppVersion;
use Illuminate\Http\Request;

class AppVersionApiController extends Controller
{
    // GET /api/v1/check-app-version?version_code=12
    //
    // Called by the Flutter app on startup with its own Play Store versionCode
    // (from package_info_plus). Decides whether the app must be force-updated
    // (blocking dialog + Play Core immediate update) or whether an optional
    // flexible update is available (background download).
    public function check(Request $request)
    {
        $currentVersionCode = (int) $request->query('version_code', 0);

        $appVersion = AppVersion::first();

        // No config set yet — never require an update.
        if (!$appVersion) {
            return response()->json([
                'success' => true,
                'force_update' => false,
                'flexible_update' => false,
                'latest_version' => null,
                'latest_version_code' => null,
                'min_version' => null,
                'update_url' => null,
                'message' => null,
            ]);
        }

        // Force update when the admin's manual kill-switch is on, OR the
        // client's version is older than the configured minimum.
        $forceUpdate = $appVersion->is_force_update
            || $currentVersionCode < $appVersion->min_version_code;

        // Flexible (optional) update: not already forced, but a newer
        // version than what the client is running exists.
        $flexibleUpdate = !$forceUpdate && $currentVersionCode < $appVersion->version_code;

        return response()->json([
            'success' => true,
            'force_update' => $forceUpdate,
            'flexible_update' => $flexibleUpdate,
            'latest_version' => $appVersion->version_name,
            'latest_version_code' => $appVersion->version_code,
            'min_version' => $appVersion->min_version_code,
            'update_url' => $appVersion->update_url,
            'message' => $appVersion->update_message,
        ]);
    }
}
