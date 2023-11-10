import { ReactNode } from "react"

interface AppContainerProps {
    children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
    return (
        <>
            <head>
                <title>TecnoStore</title>
            </head>
            {children}
        </>
    )
}

export default AppContainer