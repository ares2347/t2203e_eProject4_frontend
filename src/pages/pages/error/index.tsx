// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from '@/@core/layouts/BlankLayout'

// ** Component Import

const ErrorPage = () => null

ErrorPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ErrorPage
