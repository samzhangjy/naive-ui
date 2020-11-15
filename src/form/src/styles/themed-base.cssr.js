import { cTB, c, cB, cM } from '../../../_utils/cssr'
import fadeDownTranstion from '../../../_styles/transitions/fade-down'

export default c([
  ({ props }) => {
    const {
      labelTextColor,
      asteriskColor,
      feedbackTextColorError,
      feedbackTextColorWarning
    } = props.$local
    const {
      cubicBezierEaseInOut
    } = props.$base
    return [
      cB('form', {
        width: '100%',
        fontSize: '14px',
        lineHeight: '1.5'
      }, [
        cM('inline', {
          width: '100%',
          display: 'inline-flex',
          alignItems: 'flex-start',
          alignContent: 'space-around'
        }, [
          cB('form-item', {
            width: 'auto'
          }, [
            c('&:last-child', {
              marginRight: 0
            })
          ])
        ])
      ]),
      cTB('form-item', {
        raw: `
          width: 100%;
        `
      }, [
        cM('top-labelled', {
          raw: `
            margin-right: 18px;
          `
        }, [
          cB('form-item-label', {
            raw: `
              display: block;
              width: 100%;
              padding-left: 2px;
            `
          })
        ]),
        cM('left-labelled', {
          raw: `
            display: flex;
            flex-wrap: nowrap;
          `
        }, [
          cB('form-item-label', {
            raw: `
              box-sizing: border-box;
              padding-right: 12px;
              white-space: nowrap;
              flex-shrink: 0;
              flex-grow: 0;
            `
          }),
          cB('form-item-control', {
            raw: `
              flex-grow: 1;
            `
          })
        ]),
        cM('right-label-aligned', [
          cB('form-item-label', {
            raw: `
              text-align: right;
            `
          }, [
            c('&::after', {
              raw: `
                display: none;
              `
            })
          ])
        ]),
        cM('left-label-aligned', [
          cB('form-item-label', {
            raw: `
              text-align: left;
            `
          }, [
            c('&::before', {
              raw: `
                display: none;
              `
            })
          ])
        ]),
        cB('form-item-blank', {
          raw: `
            box-sizing: border-box;
            padding-top: 3px;
            padding-bottom: 3px;
            display: flex;
            align-items: center;
            position: relative;
          `
        }),
        cM('required', [
          cB('form-item-label', [
            c('&::after, &::before', {
              raw: `
                content: ' *';
              `,
              color: asteriskColor
            })
          ])
        ]),
        cB('form-item-label', {
          raw: `
            display: inline-block;
            box-sizing: border-box;
            font-size: 14px;
            transition: color .3s ${cubicBezierEaseInOut};
          `,
          color: labelTextColor
        }, [
          c('&::after', {
            raw: `
              transition: color .3s ${cubicBezierEaseInOut};
            `
          })

        ]),
        cB('form-item-feedback-wrapper', {
          raw: `
            padding-left: 2px;
            padding-top: 0px;
            box-sizing: border-box;
            min-height: 1.25em;
            transform-origin: top left;
            line-height: 1.25;
          `
        }, [
          cB('form-item-feedback', {
            transition: `color .3s ${cubicBezierEaseInOut}`
          }, [
            cM('error', {
              color: feedbackTextColorError
            }),
            cM('warning', {
              color: feedbackTextColorWarning
            }),
            fadeDownTranstion({
              fromOffset: '-3px',
              enterDuration: '.3s',
              leaveDuration: '.2s'
            })
          ])
        ])
      ])
    ]
  }
])
