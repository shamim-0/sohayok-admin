@extends('admin.dashboard.layout')



@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">অর্ডার এডিট করুন - {{ $order->order_id }}</h3>
                    <div class="card-tools">
                        <a href="{{ route('admin.orders.index') }}" class="btn btn-secondary btn-sm">
                            <i class="fas fa-arrow-left"></i> পিছনে যান
                        </a>
                    </div>
                </div>

                <form action="{{ route('admin.orders.update', $order) }}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="user_id">ব্যবহারকারী *</label>
                                    <select name="user_id" id="user_id" class="form-control" required>
                                        <option value="">ব্যবহারকারী নির্বাচন করুন</option>
                                        @foreach($users as $user)
                                        <option value="{{ $user->id }}" {{ $order->user_id == $user->id ? 'selected' : '' }}>
                                            {{ $user->name }} ({{ $user->email }})
                                        </option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="course_id">কোর্স *</label>
                                    <select name="course_id" id="course_id" class="form-control" required>
                                        <option value="">কোর্স নির্বাচন করুন</option>
                                        @foreach($courses as $course)
                                        <option value="{{ $course->id }}" {{ $order->course_id == $course->id ? 'selected' : '' }}>
                                            {{ $course->title }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="amount">পরিমাণ (৳) *</label>
                                    <input type="number" step="0.01" name="amount" id="amount" 
                                           class="form-control" value="{{ $order->amount }}" required>
                                </div>

                                <div class="form-group">
                                    <label for="status">স্ট্যাটাস *</label>
                                    <select name="status" id="status" class="form-control" required>
                                        <option value="pending" {{ $order->status == 'pending' ? 'selected' : '' }}>পেন্ডিং</option>
                                        <option value="completed" {{ $order->status == 'completed' ? 'selected' : '' }}>কমপ্লিটেড</option>
                                        <option value="failed" {{ $order->status == 'failed' ? 'selected' : '' }}>ফেইলড</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="payment_method">পেমেন্ট মেথড *</label>
                                    <select name="payment_method" id="payment_method" class="form-control" required>
                                        <option value="bkash" {{ $order->payment_method == 'bkash' ? 'selected' : '' }}>bKash</option>
                                        <option value="nagad" {{ $order->payment_method == 'nagad' ? 'selected' : '' }}>Nagad</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="account_number">অ্যাকাউন্ট নম্বর *</label>
                                    <input type="text" name="account_number" id="account_number" 
                                           class="form-control" value="{{ $order->account_number }}" required>
                                </div>

                                <div class="form-group">
                                    <label for="phone_number">ফোন নম্বর *</label>
                                    <input type="text" name="phone_number" id="phone_number" 
                                           class="form-control" value="{{ $order->phone_number }}" required>
                                </div>

                                <div class="form-group">
                                    <label for="transaction_id">ট্রানজেকশন আইডি *</label>
                                    <input type="text" name="transaction_id" id="transaction_id" 
                                           class="form-control" value="{{ $order->transaction_id }}" required>
                                </div>

                                <div class="form-group">
                                    <label for="promo_code_id">প্রোমো কোড</label>
                                    <select name="promo_code_id" id="promo_code_id" class="form-control">
                                        <option value="">প্রোমো কোড নির্বাচন করুন</option>
                                        @foreach($promoCodes as $promoCode)
                                        <option value="{{ $promoCode->id }}" 
                                            {{ $order->promo_code_id == $promoCode->id ? 'selected' : '' }}
                                            data-discount="{{ $promoCode->discount_amount }}">
                                            {{ $promoCode->code }} (৳{{ $promoCode->discount_amount }})
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> আপডেট করুন
                        </button>
                        <a href="{{ route('admin.orders.index') }}" class="btn btn-secondary">বাতিল করুন</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
document.getElementById('promo_code_id').addEventListener('change', function() {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const selectedOption = this.options[this.selectedIndex];
    const discount = parseFloat(selectedOption.getAttribute('data-discount')) || 0;
    
    if (discount > 0) {
        const finalAmount = amount - discount;
        alert(`ডিসকাউন্ট: ৳${discount}\nচূড়ান্ত পরিমাণ: ৳${finalAmount}`);
    }
});
</script>
@endsection