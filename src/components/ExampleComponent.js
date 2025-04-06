import React from 'react';
import screenshot from '../assets/images/screenshot.png';

const ExampleComponent = () => {
    return (
        <div>
            <h1>本地图片示例</h1>
            <img src={screenshot} alt="示例截图" />
        </div>
    );
};

export default ExampleComponent;
