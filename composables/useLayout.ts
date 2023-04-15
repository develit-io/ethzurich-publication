const defaultTitle = 'Publications'
const title = ref(defaultTitle)

export default function useLayout() {
  const changeTitle = (value?: string) => {
    title.value = value ?? defaultTitle
  }

  return {
    title,
    changeTitle,
  }
}
