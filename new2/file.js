import TikTokAPI, { getRequestParams } from 'tiktok-api';

  
// Required - a method that signs the URL with anti-spam parameters
// You must provide an implementation yourself to successfully make
// most requests with this library.
const signURL = async (url, ts, deviceId) => {
  const as = 'a1qwert123';
  const cp = 'cbfhckdckkde1'
  const mas = '';
  return `${url}&as=${as}&cp=${cp}&mas=${mas}`;
}

// Required - device parameters
// You need to source these using a man-in-the-middle proxy such as mitmproxy,
// CharlesProxy or PacketCapture (Android)
const params = getRequestParams({
  device_id: '6737916265103345157',
  // fp: '<device_fingerprint>',
  fp: '',
  iid: '6737916937165326085',
  openudid: '5c33af6a989ca7d2',
});

const api = new TikTokAPI(params, { signURL });
	

	api.loginWithEmail('<email>', '<password>')
	  	.then(res => console.log(res.data))
	  	.catch(console.log)

   	api.getUser('alishbahanjum')
	  	.then(res => console.log(res.data))
	  	.catch(console.log(err));

 	//  	api.searchUsers({
	//   		keyword: 'example',
	//   		count: 10,
	//   		cursor: 0,
	// 		})
 	//  	.then(res => console.log(res.data))
 	//  	.catch( console.log(err));

	// You are now able to make successful requests