const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '58d85efef5msh109acb1b4d1b26fp1746e7jsn83be7deb67f6',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {

  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, options)
	.then(response => response.json())
	.catch(err => console.error(err));
} 

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {

  event.preventDefault()

  const { value } = $input

  if (!value) return

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')

  const ipInfo = await fetchIpInfo(value)

  console.log(ipInfo)

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')

})

