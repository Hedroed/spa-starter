import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

export default function GlobalStyles(){
    return (
        <>
            <BaseStyles />
            <Global styles={customStyles} />
        </>
    )
}
