function show(anything){
    document.querySelector('.text-box').value = anything;
}
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}

// to change the text Dynamically
const complianceNumber=document.getElementById('complianceNumber').textContent = 2;
const values = [12, 6   , 10]; // Your input values

const colors = ['#f39c6b', '#e74c3c', '#27ae60']; // Colors for each segment

function createDoughnutChart(values, colors, gap = 2) {
    const total = values.reduce((acc, val) => acc + val, 0);
    const AppicationNumber=document.getElementById('doughnut-chart-text').innerText=`${total} Applications`
    let cumulativePercent = 0;
    const gapPercent = gap / 360; // convert gap to percentage of the circle

    const gradientSegments = values.map((value, index) => {
        const percent = value / total;
        const startPercent = cumulativePercent;
        cumulativePercent += percent;
        const endPercent = cumulativePercent - gapPercent;

        // Return the gradient string for this segment, with a small gap
        return `${colors[index]} ${startPercent * 100}% ${endPercent * 100}%, transparent ${0.20 * 100}%`;
    }).join(', ');

    // Set the conic-gradient dynamically with gaps
    document.getElementById('doughnutChart').style.background = `conic-gradient(${gradientSegments})`;
    
    // Set the center text
    // document.getElementById('chartValue').textContent = total;
}


createDoughnutChart(values, colors, 3);



// Select Clickable Links

const navLinkItems=document.getElementsByClassName('nav-menu-items');


// To Remove and add the background effect when a navLinks is being clicked
for(let navLinkItem of navLinkItems){
    navLinkItem.addEventListener('click',()=>{
         for(let navItems of navLinkItems){
            navItems.classList.remove('highlight-navLinks')
         }
         navLinkItem.classList.add('highlight-navLinks')
    })
}


// To give the color
// application-status-content
const listItems=document.getElementsByClassName('color-indicator');


let item=0;
for(let listItem of listItems){
    item++;
    listItem.style.backgroundColor = colors[item];

}
// listItems.forEach((indicator, index) => {
// });


let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function (){
    sidebar.classList.toggle('active');
};