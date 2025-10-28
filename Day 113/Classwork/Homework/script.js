document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    loadData();

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const name = document.getElementById('name').value;
        const facebookLink = document.getElementById('facebookLink').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            name: name || 'N/A',
            facebookLink: facebookLink || 'N/A',
            email: email || 'N/A',
            password: password || 'N/A'
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        updateOutput(userData);

        form.reset();
        
        alert('მონაცემები წარმატებით შეინახა!');
    });

    function loadData() {
        const storedData = localStorage.getItem('userData');
        
        if (storedData) {
            const userData = JSON.parse(storedData);
            updateOutput(userData);
        }
    }

    function updateOutput(data) {
        document.getElementById('outputName').textContent = data.name;
        document.getElementById('outputFacebook').textContent = data.facebookLink;
        document.getElementById('outputEmail').textContent = data.email;
    }
});


const toggleBtn = document.getElementById('toggleTheme');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.className = currentTheme;

toggleBtn.addEventListener('click', () => {
    const newTheme = document.body.className === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
});


let visits = localStorage.getItem('visits') || 0;
visits = Number(visits) + 1;
localStorage.setItem('visits', visits);

document.getElementById('visitCount').textContent = `You have visited this page ${visits} time(s).`;


const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('input');

inputs.forEach(input => {
    const saved = localStorage.getItem(input.id);
    if (saved) input.value = saved;

    input.addEventListener('input', () => {
        localStorage.setItem(input.id, input.value);
    });
});