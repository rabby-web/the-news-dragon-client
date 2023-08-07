import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className="bg-secondary text-center mt-3 p-2 text-light rounded">
            <h4>QZone</h4>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />

        </div>
    );
};

export default QZone;