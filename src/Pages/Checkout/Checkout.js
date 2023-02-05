import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;


        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }



        fetch('https://showpiece-zone-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('showpiece-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }




    return (
        <div>

            <form onSubmit={handlePlaceOrder}>
                <div className='text-center mt-6 mb-6 font-bold'>
                    <h2 className='text-3xl'>You are about to order: {title}</h2>
                    <h4 className="text-xl text-blue-900 font-bold mt-3">Price: ${price}</h4>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="lastName" type="text" placeholder="Last name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your phone" className="input input-bordered w-full" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Message"></textarea>
                <div className='text-center mt-6'>
                    <input className='btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none mt-3 w-full' type="submit" value="Place Your Order" />
                </div>

            </form>
        </div>
    );
};

export default Checkout;