// (P) Principal
// (n) Number of times interest is compounded per year
// (r) Interest Rate in Decimal
// (nr) Time (Years)

// API for Compound Interest JavaScript Formula
// A = P(Math.pow((1+r/n),nr));

// function CompoundInterest(P, r, n, nr)

import compoundInterest from "./CompoundInterest"

import {p, r, n, t, nCom} from " ./ compoundInterestVariable"

    const CompoundInterestAPI = () => {
        let fResult = (Math.round(nCom * compoundInterest(p, r, n, t)))
        .toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        return 'The Compound Interest for '+nCom+' Companies in '+ t + 'years is = '+fResult;
    }