window.onload = () => {
	document.getElementById('save').addEventListener('submit', e => {
		e.preventDefault();
		document.getElementById('submit-btn').disabled = true;
		gtag('event', 'conversion', {'send_to': 'AW-826716326/kq3ICOr5y34QpuGaigM'});

		let service = '9:30';

		const services = document.getElementsByName('services');

		for (let i = 0; i < services.length; i++) {
			if (services[i].checked) {
				service = services[i].value;
			}
		}

		const data = {
			firstName: document.getElementById('first-name').value,
			lastName: document.getElementById('last-name').value,
			email: document.getElementById('email').value,
			number: parseInt(document.getElementById('number').value, 10) || 1,
			service,
		};

		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (this.readyState === 4) {
				document.getElementById('save').style.display = 'none';
				document.getElementById('save-seat').appendChild(getThankYouMessage());
			}
		}
		xhr.open('POST', 'https://api.flatlandchurch.com/v2/emails/easter?key=202f1c42-7054-46ee-8ca2-ddc85f9c789b', true);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(JSON.stringify(data));

		return false;
	});
}

const getThankYouMessage = () => {
	const div = document.createElement('div');
	div.className = 'thank-you';
	const p = document.createElement('p');
	p.innerHTML = `Got it! We can't wait to see you this Easter. We've just sent you an email confirming your visit.`;
	div.appendChild(p);
	return div;
}
