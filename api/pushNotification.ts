import axios from "axios";


export const pushNoti = async (data: { title: string, content: string}) => {

	const { status } = await axios.post(`https://onesignal.com/api/v1/notifications`, {
    "app_id": "0fddad8e-61a1-4684-ab94-2652cd15f2e0",
    "included_segments": ["Subscribed Users"], 
    "headings": {"en": data.title}, 
    "contents": {"en": data.content}  
  },
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic MDMxZTIyYjctMjkzZS00NTM0LTgyYzAtMjc1OTI4YTVkNGRi'
    }
  }
  );

	return status;
};