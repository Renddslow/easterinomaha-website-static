window.onload = () => {
	document.getElementById('save').addEventListener('submit', e => {
		e.preventDefault();
		gtag('event', 'conversion', {'send_to': 'AW-826716326/kq3ICOr5y34QpuGaigM'});

		const data = {
			firstName: document.getElementById('first-name').value,
			lastName: document.getElementById('last-name').value,
			email: document.getElementById('email').value,
			number: parseInt(document.getElementById('number').value, 10)
		};

		return false;
	});
}
