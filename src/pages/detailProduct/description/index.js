import React from 'react'
import clsx from 'clsx'
import style from './description.module.scss'

function Description({description,screen,chip,ram,rom,pin,camera}) {
  return (
    <div className={clsx(style.description,'row')}>
      <div className={clsx(style.detailedDescription,'col l-8')}>
        <div className={style.dOut}>
          <h3 className={style.dHeader}>mô tả chi tiết</h3>
          <div className={style.dText}>
            {description}
          </div>
        </div>
      </div>
      <div className={clsx(style.parameter,'col l-4')}>
        <div className={style.pOut}>
            <h3 className={style.pHeader}>Thông số kĩ thuật</h3>
            <table className={style.pTable}>
              <tbody>
                <tr className={style.pTableTr}>
                  <td className={style.pTableTd}>Screen</td>
                  <td className={style.pTableTd}>
                    <span className={style.pText}>{screen}</span>
                  </td>
                </tr>
                <tr className={style.pTableTr}>
                  <td className={style.pTableTd}>Camera</td>
                  <td className={style.pTableTd}>
                    <span className={style.pText}>{camera}</span>
                  </td>
                </tr><tr className={style.pTableTr}>
                  <td className={style.pTableTd}>Chip</td>
                  <td className={style.pTableTd}>
                    <span className={style.pText}>{chip}</span>
                  </td>
                </tr>
                <tr className={style.pTableTr}>
                  <td className={style.pTableTd}>Ram</td>
                  <td className={style.pTableTd}>
                    <span className={style.pText}>{ram}</span>
                  </td>
                </tr>
                <tr className={style.pTableTr}>
                  <td className={style.pTableTd}>Rom</td>
                  <td className={style.pTableTd}>
                    <span className={style.pText}>{rom}</span>
                  </td>
                </tr>
                <tr className={style.pTableTr}>
                  <td className={style.pTableTd}>Pin</td>
                  <td className={style.pTableTd}>
                    <span className={style.pText}>{pin}</span>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Description;
