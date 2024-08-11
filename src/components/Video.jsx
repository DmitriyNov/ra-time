import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

export default function Video(props) {
    const {url, date} = props;

    const NewDateTime = DateTimePretty(DateTime, date);

    return (
        <div className="video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <NewDateTime />
        </div>
    )
}
