import { Button, Card, Image, notification } from 'antd';
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

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      // setScan(true);
    })
    .catch((err) => {
      openNotification();
    });

  const openNotification = () => {
    const args = {
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
    };
    notification.open(args);
  };

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
