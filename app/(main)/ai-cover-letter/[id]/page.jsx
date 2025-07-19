const CoverLetterPage = async ({params}) => {

    const  id  = await params .id;

  return (
    <div>A.I. Cover Letter Page : {id}</div>
  )
}

export default CoverLetterPage