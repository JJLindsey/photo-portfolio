import React from 'react';

function Nav() {
    const categories = [
        {
            name: 'commercial',
            description:
                'Photos of commercial projets',
        },
        {
            name: 'portraits',
            description: 'Portraits of people'
        },
        {
            name: 'food',
            description: 'Delicious food from my kitchen'
        },
        {
            name: 'landscape',
            description: 'Beauty of nature captured'
        },
    ];

    const handleClick = () => {
        console.log('click handled')
    }


    return (
        <header className='flex-row px-1'>
            <h2>
                <a href='/'>
                    <span role='img' aria-label='camera'></span>Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about' onClick={() => handleClick()}>
                            About Me
                        </a>
                    </li>
                    <li className={'mx-2'}>
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {
                    categories.map((category) => (
                        <li className='mx-1' key={category.name} >
                            <span onClick={() => { handleClick(); }} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;