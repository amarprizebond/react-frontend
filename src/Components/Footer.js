import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {

	return (
        <footer>
            <div className="uk-container">
                <div uk-grid="true">
                    <div className="menu-col menu-desc uk-width-1-2@s">
                        <h3>
                            <img src="/assets/images/logo-footer.png" alt="আমার প্রাইজবন্ড" />
                        </h3>
                        <p>
                            আমার প্রাইজবন্ড পরিষেবাটি সম্পূর্ণ বিনামূল্যে প্রদত্ত এবং উন্মুক্ত কোড প্রকল্প। 
                        </p>
                        <p>
                            প্রাইজবন্ড অধিকারী যেকোনো গ্রাহক এখানে বিনামূল্যে প্রাইজবন্ড নম্বর, 
                            বৈধ ফলাফলের সাথে মিলিয়ে নিতে পারেন। অথবা বিনামূল্যে অ্যাকাউন্ট 
                            খুলে প্রাইজবন্ড নম্বর সংরক্ষণ করতে পারেন। সংরক্ষিত নম্বর পূর্বের অথবা 
                            ভবিষ্যতের কোনো ফলাফলের সাথে মিলে গেলে প্রাইজবন্ড অধিকারীকে 
                            স্বয়ংক্রিয় ভাবে জানানো হয়।
                        </p>
                        <p>
                            আমার প্রাইজবন্ডকে ফেইসবুকে অনুসরণ করুন 
                            <a href="https://www.facebook.com/amarprizebond/" className="uk-icon-link" uk-icon="facebook" target="_blank" rel="noopener noreferrer"></a>
                        </p>
                    </div>
                    <div className="menu-col menu-links uk-width-1-4@s">
                        <h3>গুরুত্বপূর্ণ লিঙ্ক</h3>
                        <ul className="uk-list">
                            <li><Link to='/page/prizebond-ki'>প্রাইজবন্ড কি?</Link></li>
                            <li><Link to='/page/goponiyota-niti'>গোপনীয়তা নীতি</Link></li>
                        </ul>
                    </div>
                    <div className="menu-col menu-project uk-width-1-4@s">
                        <h3>প্রকল্প সম্পর্কিত</h3>
                        <p>
                            আমার প্রাইজবন্ড প্রকল্পের কোড উন্মুক্ত করা। স্বেচ্ছাসেবা কার্যক্রমের 
                            মাধ্যমে প্রকল্পটি চালানো হচ্ছে। এই প্রকল্পে এখন পর্যন্ত যারা অবদান
                            রেখেছেন, তাদের সকলের প্রতি কৃতজ্ঞতা।
                        </p>
                        <ul className="uk-list">
                            <li><a href='https://github.com/techchitchatbd/prizebond' target="_blank" rel="noopener noreferrer">গিটহাব লিংক</a></li>
                        </ul>
                        <p>
                            <a className="contributor" href='https://github.com/techchitchatbd' target="_blank" rel="noopener noreferrer">
                                <img src="https://avatars3.githubusercontent.com/u/54138928?s=460&v=4" alt="techchitchatbd" width="32" height="32" />
                            </a>
                            <a className="contributor" href='https://github.com/techchitchatbd' target="_blank" rel="noopener noreferrer">
                                <img src="https://avatars3.githubusercontent.com/u/54138928?s=460&v=4" alt="techchitchatbd" width="32" height="32" />
                            </a>
                            <a className="contributor" href='https://github.com/techchitchatbd' target="_blank" rel="noopener noreferrer">
                                <img src="https://avatars3.githubusercontent.com/u/54138928?s=460&v=4" alt="techchitchatbd" width="32" height="32" />
                            </a>
                            <a className="contributor" href='https://github.com/techchitchatbd' target="_blank" rel="noopener noreferrer">
                                <img src="https://avatars3.githubusercontent.com/u/54138928?s=460&v=4" alt="techchitchatbd" width="32" height="32" />
                            </a>
                            <a className="contributor" href='https://github.com/techchitchatbd' target="_blank" rel="noopener noreferrer">
                                <img src="https://avatars3.githubusercontent.com/u/54138928?s=460&v=4" alt="techchitchatbd" width="32" height="32" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
	);
}

export default Footer;