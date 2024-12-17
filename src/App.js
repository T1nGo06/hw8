import React, { useState } from 'react';
import Button from "./components/Button";
import Input from "./components/Input";
import Typography from './components/Typography';
import Heading from './components/Heading';
import Tooltip from './components/Tooltip';
import Accordion from './components/Accordion';

function App() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <div>
            {/* Button Section */}
            <section className="button-wrapper">
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button 
                    variant="bordered" 
                    size="md" 
                    onClick={() => console.log('Button clicked!')}
                >
                    Medium Button
                </Button>
                <Button variant="primary" size="lg">Large Primary</Button>
                <Button variant="bordered" size="lg" disabled>
                    Disabled Large
                </Button>
            </section>

            {/* Input Section */}
            <section className="input-wrapper">
                <Input
                    label="User Name"
                    placeholder="e.g., John Doe"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <Input
                    label="Danger Username"
                    placeholder="Something went wrong"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    danger 
                />
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="example@gmail.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <Input
                    label="Secure Password"
                    type="password"
                    placeholder="Enter your password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <Input
                    label="Readonly Field"
                    value="Unchangeable Text"
                    disabled
                />
            </section>

            {/* Typography Section */}
            <section className="text-section"> 
                <Typography textSize="sm">
                    Small Text Example. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>

                <Typography textSize="md">
                    Medium Text Example. Nulla facilisi. Vivamus eget justo id dolor feugiat commodo.
                </Typography>

                <Typography textSize="lg">
                    Large Text Example. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Typography>
            </section>

            {/* Heading Section */}
            <section className="heading-section"> 
                <Heading level={1}>Heading Level 1</Heading>
                <Heading level={2}>Heading Level 2</Heading>
                <Heading level={3}>Heading Level 3</Heading>
                <Heading level={4}>Heading Level 4</Heading>
                <Heading level={5}>Heading Level 5</Heading>
                <Heading level={6}>Heading Level 6</Heading>
            </section>

            {/* Tooltip Section */}
            <section className="tooltip-section">
                <Tooltip text="This is a top tooltip" position="top">Tooltip (Top)</Tooltip>
                <Tooltip text="This is a right tooltip" position="right">Tooltip (Right)</Tooltip>
            </section>

            {/* Accordion Section */}
            <section className="accordion-section">
                <Accordion title="Accordion Title">
                    Accordion Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion>
            </section>
        </div>
    );
}

export default App;
