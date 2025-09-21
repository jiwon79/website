export const metadata = {
    title: 'Jiwon Resume',
  }

export default function ResumePage() {
    return <embed
        src= "/resume.pdf#toolbar=0"
        style={{
            width: '100%',
            minWidth: '100vw',
            height: '100%',
            minHeight: '100svh'
        }}
        type="application/pdf"
    />
}