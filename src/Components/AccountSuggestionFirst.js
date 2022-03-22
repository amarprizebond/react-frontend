import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GetUserStat, SetUserStat } from '../Helper/LocalStorage';

function AccountSuggestionFirst(props) {

    const [setClosed] = useState(false);
    const userstat = GetUserStat();

    const handleSubmit = (e) => {
        e.preventDefault();
        setClosed(true);
        SetUserStat({ searchCount: userstat.searchCount, accuontSuggestionDismissFlagFirst: true });
    }

    if ( userstat.searchCount < 3 || userstat.accuontSuggestionDismissFlagFirst ) {
        return (<></>);
    }

	return (
        <div className="message uk-border-rounded uk-alert">
            <div className="icon"><span uk-icon="icon: info; ratio: 5"></span></div>
            <div className="text">
                <h4 className="message-title uk-text-left">আমার প্রাইজবন্ডে অ্যাকাউন্ট খুলুন</h4>
                <p className="uk-text-left">
                   আমার প্রাইজবন্ড শুধুমাত্র প্রাইজবন্ড নম্বর মেলানোর পরিষেবা নয়, 
                   এটি প্রাইজবন্ড সম্পর্কিত একটি সম্পূর্ণ পরিষেবা। আমার প্রাইজবন্ডে 
                   অ্যাকাউন্ট তৈরি করে নিম্নের সুবিধাগুলো উপভোগ করুন সম্পূর্ণ বিনামূল্যে।
                </p>
                <ul className="uk-text-left">
                    <li>আপনার অ্যাকাউন্টে যতখুশি প্রাইজবন্ড যোগ করুন।</li>
                    <li>আপনার যোগকৃত নম্বর যদি পূর্বের কোনো ফলাফলের সাথে মিলে যায়, তাহলে আপনাকে সেটা জানিয়ে দেওয়া হবে।</li>
                    <li>আপনার যোগকৃত নম্বর যদি পরবর্তী কোনো ফলাফলের সাথে মিলে যায়, তাহলে আপনাকে সেটা জানিয়ে দেওয়া হবে।</li>
                    <li>আমার প্রাইজবন্ডে অ্যাকাউন্ট খুলে নম্বর যোগ করলে, আর কখনো আপনাকে কষ্ট করে ফলাফল মিলিয়ে দেখতে হবে না।</li>
                </ul>
                <p className="message-actions uk-text-right">
                    <button type="button" onClick={handleSubmit} className="uk-button uk-button-default uk-button-large uk-border-pill uk-margin-right">
                        বুঝতে পেরেছি
                    </button>
                    <Link to="/login" className="uk-button uk-button-primary uk-button-large uk-border-pill">
                        অ্যাকাউন্ট খুলুন
                    </Link>
                </p>
            </div>
        </div>
	);
}

export default AccountSuggestionFirst;