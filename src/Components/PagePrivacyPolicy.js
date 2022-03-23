import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function PagePrivacyPolicy(props) {

	return (
        <>
			<Header hasSearchBar='yes' contClassName='uk-container-xsmall' searchBarValue='' />
			
            <div className="page-body">
                <div className="uk-container uk-container-xsmall">

                    <article className="uk-article uk-link-muted">

                        <h1 className="uk-article-title">গোপনীয়তা নীতি</h1>

                        <p>
                            <i>আমার প্রাইজবন্ড</i> পরিষেবাটি পরিচালনা করার জন্য আমরা, ব্যবহারকারীর কিছু ব্যক্তিগত তথ্য সংগ্রহ করি। 
                            সংগৃহীত তথ্য আমরা কখনো তৃতীয় পক্ষের সাথে লাভের উদ্দেশ্যে বিনিময় করি না। উন্নত 
                            পরিষেবা প্রদানের লক্ষে আমরা যে সকল তৃতীয় পক্ষের পরিষেবা ব্যবহার করি, তার একটি 
                            বিবরণ নিম্নে দেওয়া হলো।
                        </p>

                        <p>
                            <strong>Google Analytics:</strong> ওয়েবসাইট দর্শনার্থী সম্পর্কিত সাধারণ তথ্য লাভের জন্য Google 
                            Analytics পরিষেবাটি ওয়েবসাইটে যুক্ত করা হয়েছে। এতে করে কোনো একজন নির্দিষ্ট ব্যবহারকারীর 
                            ব্যক্তিগত তথ্য সংগ্রহ করা হয় না। বরঞ্চ, সামগ্রিক ব্যবহারকারীর তথ্য একত্রিত করে প্রতিবেদন 
                            তৈরী করা হয়।
                        </p>

                        <p>
                            <strong>Google Firebase:</strong> ওয়েবসাইটে দ্রুততার সাথে, সহজে এবং সঠিক নিরাপত্তা নিশ্চিত করে
                            অ্যাকাউন্ট তৈরি এবং লগিন করার জন্য Google Firebase পরিষেবাটি ব্যবহার করা হয়। আমরা শুধুমাত্র ব্যবহারকারীর
                            নাম, ইমেইল অ্যাকাউন্ট, এবং প্রোফাইল ছবি সংগ্রহ করি, ব্যবহারকারীর অনুমতি সাপেক্ষে।
                        </p>

                        <p>
                            ব্যবহারকারীর তথ্য নিরাপত্তার জন্য যেকোনো সময় অ্যাকাউন্টটি মুছে ফেলতে পারেন। অ্যাকাউন্ট সম্পূর্ণ রূপে মুছে 
                            ফেলার জন্য ব্যবহারকারীর রেজিস্টার্ড ইমেইল ঠিকানা থেকে আমাদের একটি মেইল করতে হবে, amarprizebond@gmail.com 
                            ইমেইল ঠিকানায়।
                        </p>

                    </article>

                </div>
            </div>

            <Footer />
		</>
	);
}

export default PagePrivacyPolicy;