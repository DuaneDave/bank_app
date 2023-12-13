'use client';
import { useContext, useState } from 'react';
import './profile.css'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import userContext from '../../store/userContext';
import Link from 'next/link';
function page() {
    const { foundData, userName } = useContext(userContext);
    const [isCopied, setIsCopied ] = useState(false);
    const link = [
        
        { href: '/create-transaction', label: 'Create New Transaction' },
        { href: '/all-transanctions', label: ' View All transactions' },
        { href: '/debit', label: 'View Debits' },
        { href: '/credit', label: 'View Credits' },
      ];
  return (
    <section className="profile_container">
        { userName ?
        <div className="profile_wrapper">
            <h1 className="profile_title">My Profile</h1>
            <div className="profile_data">
            <ReactPlaceholder
                        showLoadingAnimation
                        type='round'
                        color='#E0E0E0'
                        style={{ width: 200, height: 200, margin: 50, }}>

            </ReactPlaceholder>
                    <div className='get_other'>
                <h3 className="profile_name">{userName}</h3>
                <CopyToClipboard text={foundData?.did}
                onCopy={() => setIsCopied(true)}
                >   
                    <button className="copy">{!isCopied ? 'Copy Your DID' : 'Copied'}</button>
                </CopyToClipboard>
                
                <p className="balance">Balance: <span>1000</span></p>
                </div>
                <div className="list_fun">
                    {
                    link.map((item) => (
                        <button className='profile_links'>
                                <Link href={item.href}>{item.label}</Link>
                         </button>
                    ))
                    }
                </div>
            </div>
        
        </div>
        : 
        <div className="profile_wrapper">
            <h1 className='other_header'>Please Enter Your Nickname To view Your Profile</h1>
            <button className='other_btn'><Link href='/'>Create Your Nickname</Link></button>
        </div>
}
    </section>
  );
}

export default page;
