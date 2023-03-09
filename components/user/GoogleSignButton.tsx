import React, {useEffect} from 'react';
import Image from 'next/image'

declare global {
    interface Window {
        gapi: any;
    }
}

function GoogleSignInButton() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.onload = () => {
            window.gapi.load('auth2', () => {
                window.gapi.auth2.init({
                    client_id: '511369345123-nn4dcqrq3b8431bu21rr7bkamhqmtad6.apps.googleusercontent.com',
                    scope: 'https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
                });
            });
        };
        document.body.appendChild(script);
    }, []);

    function onSignIn(googleUser: any) {
        // Get the user's basic profile information
        const profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        // Get the user's contacts using the Google People API
        window.gapi.client.people.people.connections.list({
            'resourceName': 'people/me',
            'pageSize': 10,
            'personFields': 'names,emailAddresses,phoneNumbers'
        }).then((response: any) => {
            const connections = response.result.connections;
            console.log('Connections:');
            for (let i = 0; i < connections.length; i++) {
                const person = connections[i];
                console.log(person.names[0].displayName);
                console.log(person.emailAddresses[0].value);
                console.log(person.phoneNumbers[0].value);
            }
        });
    }

    return (
        <div className="w-full py-2 border space-x-2 cursor-pointer text-sm font-medium shadow-md rounded-md flex items-center justify-center "
             data-onsuccess="onSignIn">
            <Image alt={"google logo"} src={"/images/google.svg"} width={30} height={30}/>
            <p>Sign In with google</p>
        </div>
    );
}

export default GoogleSignInButton;
