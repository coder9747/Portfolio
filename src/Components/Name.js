import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                'PROGRAMMER', // Types 'One'
                2000, // Waits 1s
                'CODER', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'ENGINEER', // Types 'Three' without deleting 'Two'
                3000,
                "DEVELOPER",
                () => {
                    console.log('Sequence completed');
                },
            ]}
            wrapper="span"
            className='word' 
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block', }}
        />
    );
};

export default ExampleComponent;