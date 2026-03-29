import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
  Outlet,
} from '@tanstack/react-router'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { SubmitOpportunityPage } from './pages/SubmitOpportunityPage'
import { BecomePartnerPage } from './pages/BecomePartnerPage'
import { AboutPage } from './pages/AboutPage'
import { FaqsPage } from './pages/FaqsPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsPage } from './pages/TermsPage'
import { GdprPage } from './pages/GdprPage'

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const submitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/submit-opportunity',
  component: SubmitOpportunityPage,
})

const partnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/become-a-partner',
  component: BecomePartnerPage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

const faqsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faqs',
  component: FaqsPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
})

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: TermsPage,
})

const gdprRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gdpr',
  component: GdprPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  submitRoute,
  partnerRoute,
  aboutRoute,
  faqsRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
  gdprRoute,
])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <RouterProvider router={router} />
}
