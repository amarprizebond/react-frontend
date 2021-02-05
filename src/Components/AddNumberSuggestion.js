import React from 'react';

function AddNumberSuggestion(props) {

	return (
        <div className="message uk-border-rounded uk-alert">
            <div className="icon"><span uk-icon="icon: heart; ratio: 5"></span></div>
            <div className="text">
                <h4 className="message-title uk-text-left">আমার প্রাইজবন্ডে অ্যাকাউন্ট খোলার জন্য আপনাকে অভিনন্দন</h4>
                <p className="uk-text-left">
                   আপনি এখনও কোনো প্রাইজবন্ড যোগ করেননি। আমার প্রাইজবন্ড পরিষেবাটি 
                   সম্পূর্ণ উপভোগ করতে আপনার অ্যাকাউন্টে প্রাইজবন্ড যোগ করে নিম্নোক্ত 
                   সুবিধাগুলো বিনামূল্যে উপভোগ করুন।
                </p>
                <ul className="uk-text-left">
                    <li>অ্যাকাউন্টে যতখুশি প্রাইজবন্ড যোগ করার সুবিধা।</li>
                    <li>স্বয়ংক্রিয় ভাবে ফলাফল মিলানোর সুবিধা।</li>
                    <li>পরবর্তী ড্রয়ের ফলাফল স্বয়ংক্রিয় ভাবে যাচাই করে আপনাকে জানিয়ে দেওয়া।</li>
                </ul>
                <p className="message-actions uk-text-right">
                    <button type="button" className="uk-button uk-button-primary uk-button-large uk-border-pill" uk-toggle="target: #add-new-number">
                        নম্বর যোগ করুন
                    </button>
                </p>
            </div>
        </div>
	);
}

export default AddNumberSuggestion;