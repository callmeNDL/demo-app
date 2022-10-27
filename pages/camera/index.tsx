import { Button, Card, Image } from 'antd';
import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const videoConstraints = {
    width: 350,
    height: 360,
    facingMode: 'user',
  };
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  return (
    <div className="camera">
      <Card
        title="camera"
        extra={
          !isCaptureEnable ? (
            <Button type="primary" onClick={() => setCaptureEnable(true)} className="btn">
              Start
            </Button>
          ) : (
            <div>
              <Button type="primary" danger onClick={() => setCaptureEnable(false)} className="btn">
                Stop
              </Button>
            </div>
          )
        }
      >
        {isCaptureEnable && (
          <div className="camera__box">
            <div>
              <Webcam
                mirrored={true}
                audio={false}
                width={350}
                height={360}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
            <Button type="default" onClick={capture}>
              Take photo
            </Button>
          </div>
        )}
        {url && (
          <>
            <div className="photo">
              <Image src={url} alt="Screenshot" />
              <div className="photo-button">
                <Button
                  type="dashed"
                  danger
                  onClick={() => {
                    setUrl(null);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
export default Camera;
