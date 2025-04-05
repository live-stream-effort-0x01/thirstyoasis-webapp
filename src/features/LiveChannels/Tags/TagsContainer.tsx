import scrollTags from "./utils/scrollTags";

export default function TagsContainer() {

    return (
        <div className="tags-container">
            <button className="tags-prev" onClick={()=>scrollTags(-1)}>&#10094;</button>
            <div className="tags">
                <span className="tag">Tag 1</span>
                <span className="tag">Tag 2</span>
                <span className="tag">Tag 3</span>
                <span className="tag">Tag 4</span>
                <span className="tag">Tag 5</span>
                <span className="tag">Tag 6</span>
                <span className="tag">Tag 7</span>
                <span className="tag">Tag 8</span>
                <span className="tag">Tag 9</span>
                <span className="tag">Tag 10</span>
                <span className="tag">Tag 11</span>
                <span className="tag">Tag 12</span>
                <span className="tag">Tag 13</span>
                <span className="tag">Tag 14</span>
                <span className="tag">Tag 15</span>
                <span className="tag">Tag 16</span>
                <span className="tag">Tag 17</span>
                <span className="tag">Tag 18</span>
                <span className="tag">Tag 19</span>
                <span className="tag">Tag 20</span>
                <span className="tag">Tag 21</span>
                <span className="tag">Tag 22</span>
            </div>
            <button className="tags-next" onClick={()=>scrollTags(1)}>&#10095;</button>
        </div>
    )
  
}