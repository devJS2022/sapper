import React, {useEffect} from 'react';
import {FC, useState} from 'react';
import pointer from '../img/pointer.svg';
import explousion from '../img/mine.svg'

interface IProps {
    x: number
    y: number
    num: number
    sortNum: number[]
    ammountMine: number
}
 
export const TableItem: FC<IProps> = ({x, y, num, sortNum, ammountMine}: IProps) => {
    const [mine, setMine] = useState<string>('')
    const [btnTable, setBtnTable] = useState<boolean>(true)
    const [bomb, setBomb] = useState<boolean>(false)

    const classInvisible = btnTable ? 'invisible' : ''
    const classExplousion = !btnTable ? 'visible' : ''
    const classBtn = ['table__item', classInvisible]
    const classMine = ['explousion', classExplousion]

    const toggleBtn = ()=> {
        setBtnTable(false)
        setBomb(false)
    }

    const addBomb = (e: React.MouseEvent) => {
        e.preventDefault()
        if(!btnTable) {
            return
        }
        setBomb(prev => !prev)
    }

    useEffect(() => {
        for (let i=0; i < ammountMine; i++) {
            if(num === sortNum[i]) {
                setMine(' ')
            }
        }
        sortNum=[]
    }, [])


    return (
        <button 
            className={classBtn.join(' ')}
            onClick={() => toggleBtn()}
            onContextMenu={(e) => addBomb(e)}
            x={x}
            y={y}
            num={num}
            mine={mine}
        >
            {mine && <img src={explousion} className={classMine.join(' ')} alt='explousion' />}
            {bomb && <img src={pointer} className='bomb' alt='pointer'/>}
        </button>
    )
}