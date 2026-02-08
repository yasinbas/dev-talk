import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('DevTalk', () => {
    it('should be a test environment', () => {
        expect(process.env.NODE_ENV).toBe('test')
    })

    it('should pass a basic math test', () => {
        expect(1 + 1).toBe(2)
    })
})
