import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/bn';
import numeral from 'numeral';
import Skeleton from 'react-loading-skeleton';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {bengaliNumber} from '../Helper/NumberHelper';

function PageResult(props) {

    let [ currentResult, setCurrentResult ] = useState(false);
    let [ resultNumbers, setResultNumbers ] = useState(false);
    let { serialNumber } = useParams();

    const fetchData = (serialNumber) => {

        setCurrentResult(false);
        setResultNumbers(false);

        let url = `${process.env.REACT_APP_API_URL}/results/${serialNumber}`;
        axios.get(url)
            .then(function (response) {
                setCurrentResult(response.data);
            });

        let url2 = `${process.env.REACT_APP_API_URL}/results/${serialNumber}/numbers/`;
        axios.get(url2)
            .then(function (response) {
                
                let newResultNumbers = {
                    r1: { prize: 0, value: 0, numbers: [] },
                    r2: { prize: 0, value: 0, numbers: [] },
                    r3: { prize: 0, value: 0, numbers: [] },
                    r4: { prize: 0, value: 0, numbers: [] },
                    r5: { prize: 0, value: 0, numbers: [] },
                };

                response.data.data.forEach((item, index) => {
                    newResultNumbers['r'+item.prize].prize = item.prize;
                    newResultNumbers['r'+item.prize].value = item.value;
                    newResultNumbers['r'+item.prize].numbers.push(item.number);
                });

                setResultNumbers(newResultNumbers);    

            });
    }

    useEffect(() => {

        fetchData(serialNumber);
    }, [serialNumber]);

	return (
        <>
			<Header hasSearchBar='yes' contClassName='uk-container-xsmall' searchBarValue='' />
			
            <div className="page-body">
                <div className="uk-container uk-container-xsmall">
                    
                    <article className="uk-article uk-link-muted">

                        <h1 className="uk-article-title">
                            {currentResult ? (
                                bengaliNumber(currentResult.serial) + 'তম ড্রয়ের ফলাফল'
                            ) : (
                                <Skeleton />
                            )}
                        </h1>
                        <dl className="uk-description-list">
                            <dt>ফলাফল ঘোষণার তারিখ</dt>
                            <dd>
                                {currentResult ? (
                                    <Moment locale="bn" format="Do MMMM, YYYY">{currentResult.pub_date}</Moment>
                                ) : (
                                    <Skeleton width={150} />
                                )}
                            </dd>
                        </dl>

                        <div className="block-group">
                            <div className="prize">
                                <h3 className="uk-heading-small">প্রথম পুরস্কার</h3>
                                <span className="uk-text-lead uk-text-muted">
                                    {resultNumbers ? (
                                        bengaliNumber(numeral(resultNumbers.r1.value).format('0,0')) + ' টাকা'
                                    ) : (
                                        <Skeleton width={120} />
                                    )}
                                </span>
                            </div>
                            <hr className="divider style-3" />
                            <div className="block-numbers">
                                {resultNumbers ? (
                                    resultNumbers.r1.numbers.map((item, index) => {
                                        return (
                                            <span key={index} className="number">{bengaliNumber(numeral(item).format('0000000'))}</span>
                                        )
                                    })
                                ) : (
                                    <span className="number"><Skeleton width={120} /></span>
                                )}
                            </div>
                        </div>

                        <div className="block-group">
                            <div className="prize">
                                <h3 className="uk-heading-small">দ্বিতীয় পুরস্কার</h3>
                                <span className="uk-text-lead uk-text-muted">
                                    {resultNumbers ? (
                                        bengaliNumber(numeral(resultNumbers.r2.value).format('0,0')) + ' টাকা'
                                    ) : (
                                        <Skeleton width={120} />
                                    )}
                                </span>
                            </div>
                            <hr className="divider style-3" />
                            <div className="block-numbers">
                                {resultNumbers ? (
                                    resultNumbers.r2.numbers.map((item, index) => {
                                        return (
                                            <span key={index} className="number">{bengaliNumber(numeral(item).format('0000000'))}</span>
                                        )
                                    })
                                ) : (
                                    <span className="number"><Skeleton width={120} /></span>
                                )}
                            </div>
                        </div>

                        <div className="block-group">
                            <div className="prize">
                                <h3 className="uk-heading-small">তৃতীয় পুরস্কার <small>{resultNumbers ? (bengaliNumber(resultNumbers.r3.numbers.length)) : (<Skeleton width={20} />) } টি</small></h3>
                                <span className="uk-text-lead uk-text-muted">
                                    {resultNumbers ? (
                                        bengaliNumber(numeral(resultNumbers.r3.value).format('0,0')) + ' টাকা'
                                    ) : (
                                        <Skeleton width={120} />
                                    )}
                                </span>
                            </div>
                            <hr className="divider style-3" />
                            <div className="block-numbers">
                                {resultNumbers ? (
                                    resultNumbers.r3.numbers.map((item, index) => {
                                        return (
                                            <span key={index} className="number">{bengaliNumber(numeral(item).format('0000000'))}</span>
                                        )
                                    })
                                ) : (
                                    [...Array(2)].map((item, index) => {
                                        return (
                                            <span key={index} className="number"><Skeleton width={120} /></span>
                                        )
                                    })
                                )}
                            </div>
                        </div>

                        <div className="block-group">
                            <div className="prize">
                                <h3 className="uk-heading-small">চতুর্থ পুরস্কার <small>{resultNumbers ? (bengaliNumber(resultNumbers.r4.numbers.length)) : (<Skeleton width={20} />) } টি</small></h3>
                                <span className="uk-text-lead uk-text-muted">
                                    {resultNumbers ? (
                                        bengaliNumber(numeral(resultNumbers.r4.value).format('0,0')) + ' টাকা'
                                    ) : (
                                        <Skeleton width={120} />
                                    )}
                                </span>
                            </div>
                            <hr className="divider style-3" />
                            <div className="block-numbers">
                                {resultNumbers ? (
                                    resultNumbers.r4.numbers.map((item, index) => {
                                        return (
                                            <span key={index} className="number">{bengaliNumber(numeral(item).format('0000000'))}</span>
                                        )
                                    })
                                ) : (
                                    [...Array(2)].map((item, index) => {
                                        return (
                                            <span key={index} className="number"><Skeleton width={120} /></span>
                                        )
                                    })
                                )}
                            </div>
                        </div>

                        <div className="block-group">
                            <div className="prize">
                                <h3 className="uk-heading-small">পঞ্চম পুরস্কার <small>{resultNumbers ? (bengaliNumber(resultNumbers.r5.numbers.length)) : (<Skeleton width={20} />) } টি</small></h3>
                                <span className="uk-text-lead uk-text-muted">
                                    {resultNumbers ? (
                                        bengaliNumber(numeral(resultNumbers.r5.value).format('0,0')) + ' টাকা'
                                    ) : (
                                        <Skeleton width={120} />
                                    )}
                                </span>
                            </div>
                            <hr className="divider style-3" />
                            <div className="block-numbers">
                                {resultNumbers ? (
                                    resultNumbers.r5.numbers.map((item, index) => {
                                        return (
                                            <span key={index} className="number">{bengaliNumber(numeral(item).format('0000000'))}</span>
                                        )
                                    })
                                ) : (
                                    [...Array(40)].map((item, index) => {
                                        return (
                                            <span key={index} className="number"><Skeleton width={120} /></span>
                                        )
                                    })
                                )}
                            </div>
                        </div>

                    </article>

                </div>
            </div>

            <Footer />
        </>
	);
}

export default PageResult;