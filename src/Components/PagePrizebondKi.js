import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

function PagePrizebondKi(props) {

	return (
        <>
			<Header hasSearchBar='yes' contClassName='uk-container-xsmall' searchBarValue='' />
			
            <div className="page-body">
                <div className="uk-container uk-container-xsmall">

                    <article className="uk-article uk-link-muted">

                        <h1 className="uk-article-title">প্রাইজবন্ড কি?</h1>

                        <p>
                            বাংলাদেশ প্রাইজবন্ড হলো বাংলাদেশের সরকার কর্তৃক সঞ্চয়ের লক্ষে প্রবর্তিত এক প্রকার কাগুজে মুদ্রা পদ্ধতি। ১৯৭৪ সালে বাংলাদেশে সর্বপ্রথম প্রাইজবন্ড চালু করে।
                            বাংলাদেশ প্রাইজবন্ড বাংলাদেশ ব্যাংকের সমস্ত বাণিজ্যিক ব্যাংক (সরকারী, আধা-সরকারী ও বেসরকারী ব্যাংক), ক্যাশ অফিস ও ডাকঘর থেকে কেনা ও ভাঙানো যায়।
                        </p>

                        <p className="uk-text-lead">নিয়মাবলীঃ</p>
                        <p>
                            বছরে চারবার প্রতি তিন মাস অন্তর প্রাইজবন্ডের ভাগ্যপরীক্ষা বা ড্র (draw) অনুষ্ঠিত হয়, তারিখগুলো হল:
                        </p>
                        <ul className="uk-list uk-list-bullet">
                            <li>৩১ জানুয়ারি</li>
                            <li>৩০ এপ্রিল</li>
                            <li>৩১ জুলাই</li>
                            <li>৩১ অক্টোবর</li>
                        </ul>
                        <p>
                            তবে উক্ত তারিখগুলোর কোনটিতে কোন সাপ্তাহিক ছুটি (বর্তমানে শুক্র ও শনিবার) বা সরকারি ছুটি (সাধারণ/নির্বাহী আদেশে/ঐচ্ছিক), 
                            অথবা অন্য কোন কারনে প্রাইজবন্ডের ভাগ্যপরীক্ষা অনুষ্ঠিত হতে না পারলে পরবর্তী কার্যদিবসে তা সম্পন্ন করা হয়।
                        </p>
                        <p>
                            প্রাইজবন্ড কেনার দুই মাস পার হওয়ার পরই কেবলমাত্র এটি ভাগ্যপরীক্ষার আওতায় আসে।
                        </p>
                        <p>
                            ভাগ্যপরীক্ষার দুই বছর পর্যন্ত প্রাইজবন্ডের পুরস্কারের অর্থ দাবি করতে হয়, অন্যথায় এ অর্থ তামাদি হয়ে সরকারি কোষাগারে ফেরত যায়।
                        </p>
                        <p>
                            ভাগ্যপরীক্ষার ফলাফল সাধারণত বাংলাদেশ <a href="https://www.bb.org.bd/investfacility/prizebond/pbsearch.php" target="_blank" rel="noopener noreferrer">ব্যাংকের ওয়েব সাইট</a> অথবা বিভিন্ন জাতীয় দৈনিক পত্রিকার মাধ্যমে প্রকাশ করা হয়।
                        </p>

                        <p className="uk-text-lead">পুরস্কারের মূল্যমানঃ</p>
                        <p>
                            বর্তমানে প্রাইজবন্ডের ৫৮টি সিরিজ প্রচলিত আছে। প্রতিটি সিরিজের জন্য ৪৬টি পুরস্কার বিদ্যমান রয়েছে। এর পুরস্কারের বিন্যাস নিম্নরূপঃ
                        </p>
                        <table className="uk-table uk-table-small uk-table-divider">
                            <thead>
                                <tr>
                                    <th>পুরস্কার</th>
                                    <th>সংখ্যা</th>
                                    <th>অর্থের পরিমাণ (প্রতিটি)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>প্রথম</td>
                                    <td>একটি</td>
                                    <td>৬ লাখ টাকা</td>
                                </tr>
                                <tr>
                                    <td>দ্বিতীয়</td>
                                    <td>একটি</td>
                                    <td>৩ লাখ ২৫ হাজার টাকা</td>
                                </tr>
                                <tr>
                                    <td>তৃতীয়</td>
                                    <td>দুটি</td>
                                    <td>১ লাখ টাকা</td>
                                </tr>
                                <tr>
                                    <td>চতুর্থ</td>
                                    <td>দুটি</td>
                                    <td>৫০ হাজার টাকা</td>
                                </tr>
                                <tr>
                                    <td>পঞ্চম</td>
                                    <td>৪০টি</td>
                                    <td>১০ হাজার টাকা</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            ভাগ্যপরীক্ষায় জেতার পর মূল প্রাইজবন্ডসহ সরকারের <a href="https://www.bb.org.bd/services/forms/pbond_claimform.pdf" target="_blank" rel="noopener noreferrer">নির্ধারিত ফরমে</a> আবেদন করলে সর্বোচ্চ দুই মাসের মধ্যে বিজয়ীকে পে-অর্ডারের মাধ্যমে অর্থ দেওয়া হয়।
                        </p>

                        <p className="uk-text-lead">কোথায় কিনতে পাওয়া যায়?</p>
                        <p>
                            বাংলাদেশ ব্যাংকের সকল অফিসের ক্যাশ কাউন্টারসহ সকল বানিজ্যিক ব্যাংক, 
                            জাতীয় সঞ্চয় ব্যুরো, সকল পোস্ট অফিসে উপস্থিত হয়ে নগদ অর্থের বিনিময়ে 
                            প্রাইজবন্ড ক্রয় করা ও ভাংগানো যায়। 
                        </p>

                        <p className="uk-article-meta">
                            তথ্যসূত্রঃ <br />
                            ১. <a href="http://nationalsavings.portal.gov.bd/site/page/b4b2e9da-d5cd-478c-a8ec-cf24260dbe96/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%9C-%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A1" target="_blank" rel="noopener noreferrer">বাংলাদেশ সরকার তথ্য ভান্ডার</a> <br />
                            ২. <a href="http://bn.banglapedia.org/index.php?title=%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%9C_%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A1" target="_blank" rel="noopener noreferrer">বাংলাপিডিয়া</a> <br />
                            ৩. <a href="https://bn.wikipedia.org/wiki/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%9C%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A1" target="_blank" rel="noopener noreferrer">বাংলা উইকিপিডিয়া</a>
                        </p>

                    </article>

                </div>
            </div>

            <Footer />
		</>
	);
}

export default PagePrizebondKi;