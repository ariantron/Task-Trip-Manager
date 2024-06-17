import React, {useState} from 'react';

interface Link {
    id: string;
    text: string;
    data: never;
}

interface ScrollMenuProps {
    links: Link[];
    handleChildClick: (input: never) => void;
}

const ScrollMenu: React.FC<ScrollMenuProps> = ({links, handleChildClick}) => {
    const [selectedId, setSelectedId] = useState(links.length > 0 ? links[0].id : '');

    const handleClick = (id: string, input: never) => {
        setSelectedId(id);
        handleChildClick(input);
    };

    return (
        <div className="scrollmenu overflow-x-auto whitespace-nowrap mt-2 mb-2">
            {links.map((link) => (
                <a
                    key={link.id}
                    href="#"
                    onClick={() => handleClick(link.id, link.data)}
                    className={`inline-block text-xl text-center py-4 px-6 border border-black
                    ${selectedId === link.id ? 'bg-black text-white hover:bg-gray-800' : 'text-black hover:bg-black hover:text-white'}`}
                >
                    {link.text}
                </a>
            ))}
        </div>
    );
};

export default ScrollMenu;
