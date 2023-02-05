export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }

    // get jwt token
    fetch('https://showpiece-zone-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('token', data.token);
        });
}