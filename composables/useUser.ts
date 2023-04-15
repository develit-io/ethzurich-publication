const connected = ref(false)
const user = ref(false)

export default function useUser() {
  const register = () => {
    user.value = true
  }

  return {
    connected,
    user,
    register,
  }
}
