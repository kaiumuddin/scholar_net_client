import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import {Tabs} from "flowbite-react" ;
const PrivacySettings = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabsRef = useRef(null);
  
    return (
        <>
  <Helmet><title>Privacy settings</title></Helmet>

    <div className="my-10 container">
    <Tabs.Group
        aria-label="Default tabs"
        ref={tabsRef}
        onActiveTabChange={tab => setActiveTab(tab)}
      >
        <Tabs.Item active title="Pricing policy">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sed quisquam dolor aliquam, possimus assumenda soluta doloribus natus enim eum commodi explicabo libero, illum rem mollitia eveniet fuga corrupti nam non. Voluptatibus in praesentium libero esse animi sapiente inventore nisi, incidunt accusantium vero pariatur aliquid aspernatur rem ex non reprehenderit voluptatum, facilis culpa nemo ducimus quo assumenda veniam voluptas error. Nemo nihil voluptatum repudiandae dolore numquam mollitia eum sequi itaque rerum magnam ipsa amet eaque cupiditate provident dignissimos officia velit corrupti delectus asperiores, tempore eos rem ratione quidem? Itaque, dignissimos cupiditate ut molestias nihil autem ullam! Esse hic sit adipisci earum, nisi, voluptatem harum vero dicta fugit quo voluptas ex quia. Inventore cupiditate voluptatem rerum, distinctio reiciendis quia repellendus cum vero alias excepturi. Eos ex enim beatae doloremque?
        </Tabs.Item>
        <Tabs.Item title="Company policy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius quod cum laboriosam, veniam, ipsam ipsum dolores adipisci praesentium dolorem tenetur nihil quasi quaerat vero explicabo dicta. Laborum autem perspiciatis consequuntur incidunt totam optio voluptate et facilis? Incidunt animi modi, cum commodi quas illum autem quo ipsum veritatis delectus laudantium beatae maiores rem quam eum facere officiis dicta consequuntur enim. Repellat debitis eius id sunt architecto soluta rem voluptatibus culpa porro quam aliquam laudantium dolorum veritatis, animi distinctio fuga esse ut obcaecati nulla. Maxime tenetur velit ex laudantium quidem iure repellendus illum unde! Unde possimus, voluptate, delectus asperiores obcaecati quos voluptates architecto consectetur sed modi id dicta ipsum iure vel excepturi quis saepe repudiandae aliquam doloribus nam ducimus atque numquam. Adipisci, quasi nobis! At eaque itaque tenetur quae?</Tabs.Item>
        <Tabs.Item title="Terms & condition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, culpa mollitia. Error in, culpa officiis ratione voluptatibus, molestias mollitia aliquam sint modi amet iure consequatur saepe ut eius totam consequuntur commodi aspernatur enim aut? Nisi dolor dignissimos beatae expedita distinctio doloremque eligendi cupiditate qui iusto ea obcaecati, impedit aperiam excepturi id, modi, voluptates eius velit? Sapiente illo dignissimos tempore recusandae sequi tenetur consectetur laborum, iusto doloribus accusantium rerum placeat repudiandae error expedita quia aliquid nesciunt! Adipisci numquam sint doloremque assumenda deleniti laudantium suscipit, aut obcaecati facere similique, veritatis sit, ratione qui! Veniam deserunt nam quis incidunt illum autem vel voluptas necessitatibus blanditiis perspiciatis amet veritatis, quam, minima vero! At, reprehenderit doloremque maiores animi, nemo nulla consequuntur labore eaque praesentium, esse culpa fugiat soluta illo? Porro laudantium eaque illo?</Tabs.Item>
        <Tabs.Item title="Copy right policy">Copy right policy</Tabs.Item>
        <Tabs.Item title="Change your name">Change your name</Tabs.Item>
      </Tabs.Group>
      <div className='my-8 text-center text-lg text-blue-600'>Active tab: {activeTab + 1}</div>
    </div>
    </>
    );
};

export default PrivacySettings;