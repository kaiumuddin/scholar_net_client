import React from 'react';
const Messenger = () => {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '{1263999531134448}',
            cookie: true,
            xfbml: true,
            version: '{v16.0}'
        });
    };

    function MessengerPlugin() {
        useEffect(() => {
            window.fbAsyncInit = function () {
                FB.init({
                    appId: '{1263999531134448}',
                    cookie: true,
                    xfbml: true,
                    version: '{v16.0}'
                });
                // FB.CustomerChat.show(shouldShowDialog: boolean);
            };
        }, []);
    }

    return (
        <div>
            <div id="fb-root"></div>
            <div
                className="fb-customerchat"
                attribution="setup_tool"
                page_id="{your-page-id}"
            />
        </div>
    );
};

export default Messenger;