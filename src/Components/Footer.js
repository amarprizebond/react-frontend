import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Footer(props) {

    let [contributers, setContributers] = useState([]);

    useEffect(() => {

        let url = 'https://api.github.com/repos/amarprizebond/react-frontend/contributors?per_page=5&anon=1';
        axios.get(url)
            .then(function (response) {
                setContributers(response.data);
            });

    }, []);

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
                            <li><a href='https://github.com/amarprizebond/' target="_blank" rel="noopener noreferrer">গিটহাব লিংক</a></li>
                        </ul>
                        <p>
                            {contributers.map((val, index) => {
                                return (
                                    <Link className="contributor" key={index} to={{ pathname: val.html_url }} target="_blank" rel="noopener noreferrer">
                                        <img src={val.avatar_url} alt={val.login} width="32" height="32" />
                                    </Link>
                                );
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
	);
}

export default Footer;