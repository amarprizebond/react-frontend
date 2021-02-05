
export function bengaliNumber( number ) {
    
    number = number.toString();
    number = number.replace(/0/g, '০');
    number = number.replace(/1/g, '১');
    number = number.replace(/2/g, '২');
    number = number.replace(/3/g, '৩');
    number = number.replace(/4/g, '৪');
    number = number.replace(/5/g, '৫');
    number = number.replace(/6/g, '৬');
    number = number.replace(/7/g, '৭');
    number = number.replace(/8/g, '৮');
    number = number.replace(/9/g, '৯');

    return number;
}

export function bengaliNumberPosition( number ) {
    
    let numberBangla = '';
    let numberPosition = '';
    let position = {
         p1: 'প্রথম',
         p2: 'দ্বিতীয়',
         p3: 'তৃতীয়',
         p4: 'চতুর্থ',
         p5: 'পঞ্চম',
         p6: 'ষষ্ঠ',
         p7: 'সপ্তম',
         p8: 'অষ্টম',
         p9: 'নবম',
        p10: 'দশম'
    };

    numberPosition = position['p'+number] ? position['p'+number] : 'তম';
    if (numberPosition === 'তম') {
        numberBangla = bengaliNumber(number);
    }

    return numberBangla + numberPosition;
}

export function englishNumber( number ) {
    
    number = number.toString();
    number = number.replace(/০/g, '0');
    number = number.replace(/১/g, '1');
    number = number.replace(/২/g, '2');
    number = number.replace(/৩/g, '3');
    number = number.replace(/৪/g, '4');
    number = number.replace(/৫/g, '5');
    number = number.replace(/৬/g, '6');
    number = number.replace(/৭/g, '7');
    number = number.replace(/৮/g, '8');
    number = number.replace(/৯/g, '9');

    return number;
}

export function sanitizeNumber( number ) {
    
    number = englishNumber(number);
    number = number.replace(/\D/g, '');

    return number;
}
