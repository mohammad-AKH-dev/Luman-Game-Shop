import ArticleBox from "../Box/ArticleBox";
import SectionHeader from "../sectionHeader/SectionHeader";


export default function LastArtcles() {
  return (
    <section className="LastArticles-section mt-36">
      <div className="container">
        <SectionHeader title={'آخرین مقاله های ما'}/>
        <div className="Article-boxes_wrapper mt-12 grid grid-cols-1 sm1:grid-cols-2 xs2:grid-cols-3 place-items-center lg:grid-cols-4 gap-8">
            <ArticleBox/>
            <ArticleBox/>
            <ArticleBox/>
            <ArticleBox/>
        </div>
      </div>
    </section>
  )
}
