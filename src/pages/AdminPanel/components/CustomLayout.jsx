import Dropzone from "react-dropzone";
// import defaultClassNames from 'classnames';

const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
  return (
    <div>
      {previews}

      <div {...dropzoneProps}>
        {files.length < maxFiles && input}
      </div>

      {files.length > 0 && submitButton}
    </div>
  )
}

const CustomLayout = () => {
  const getUploadParams = () => ({ url: 'https://httpbin.org/post' })

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      // LayoutComponent={Layout}
      onSubmit={handleSubmit}
      // classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
      inputContent="Drop Files (Custom Layout)"
    />
  )
}
  
export default CustomLayout;
