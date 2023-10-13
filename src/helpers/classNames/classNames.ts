type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
    console.log()

    return [cls, ...additional, ...Object.entries(mods).reduce((acc, [cls, value]) => {
        if (Boolean(value)) acc.push(cls)
        return acc
    }, [])].join(' ')
}