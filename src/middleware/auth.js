export default function auth ({ next, router }) {
  if (localStorage.getItem('access_token') === null) {
    return router.push({ name: 'login' })
  }

  return next()
}
