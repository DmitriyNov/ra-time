import Video from "./Video";

export default function VideoList(props) {
    const {list} = props;

    return list.map((item, i) => (
        <Video key={i} url={item.url} date={item.date} />
    ));
}
