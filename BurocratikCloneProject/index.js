const companiesLeft = [
    'https://burocratik.com/public/imgs/studios/cocacola.svg',
    'https://burocratik.com/public/imgs/studios/macdonalds.svg',
    'https://burocratik.com/public/imgs/studios/navigator.svg',
    'https://burocratik.com/public/imgs/studios/aquafresh.svg',
];

const companiesRight = [
    'https://burocratik.com/public/imgs/studios/calem.svg',
    'https://burocratik.com/public/imgs/studios/ibm.svg',
    'https://burocratik.com/public/imgs/studios/unilever.svg',
    'https://burocratik.com/public/imgs/studios/mpc.svg'
];
const introSpanElements = ['Run','Fly','Travel','Move','Rush','Race','Sprint','Fly','Zzz','Scroll','Flow']

const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const introSpan = document.getElementById('introSpan');

var count = 0;
const changingLogo = () => {
    if(count>companiesLeft.length-1 || count>companiesRight.length-1){
        count = 0;
    }
    leftImage.src = companiesLeft[count];
    rightImage.src = companiesRight[count]
    count += 1;
}

setInterval(changingLogo,2500);

var spanCount = 0;
const changingSpans = () => {
    if(spanCount>introSpanElements.length-1){
        spanCount =  0
    }
    introSpan.innerText = introSpanElements[spanCount];
    spanCount +=1 ;
}

setInterval(changingSpans,500)