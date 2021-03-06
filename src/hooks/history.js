import * as historyApis from '../api/history'
import * as ActionTypes from '../constant/actions'
import { useHistory } from '../context/historyContext'

export function usehistoryOperation() {
    const { history, dispatchHistory } = useHistory();

    function ifvideoinhistory(video) {
        const isvideo = history?.historyproducts?.find((videos => videos?._id === video?._id))
        if (isvideo) {
            return true;
        } else {
            return false;
        }
    }

    async function gethistoryvideoList(callback) {
        const response = await historyApis?.getHistoryList();
        console.log('res from get history',response)
        await dispatchHistory({
            type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload: response?.data?.history
        })
        if (callback) {
            return callback();
        }
    }

    async function postTohistory(video, callback) {
        if (ifvideoinhistory(video)) {
            await dispatchHistory({
                type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
                payload: history?.historyproducts
            })
        }
        const response = await historyApis?.postHistory(video);
        console.log('res from post history',response)
        await dispatchHistory({
            type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload: response?.data?.history
        })
        if (callback) {
            return callback();
        }
    }

    async function removeFromhistory(videoId, callback) {
        const response = await historyApis?.deleteHistoryVideo(videoId);
        console.log('res from remove single video history',response)
        dispatchHistory({
            type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload: response?.data?.history
        })
        if (callback) {
            return callback();
        }
    }

    async function removeAllHistory(callback) {
        const response = await historyApis?.deleteHistoryVideos();
        console.log('res from remove all history',response)
        dispatchHistory({
            type: ActionTypes?.historyAction?.ADD_TO_HISTORY,
            payload: response?.data?.history
        })
        if (callback) {
            return callback()
        }
    }

    return {
        gethistoryvideoList,
        postTohistory,
        removeFromhistory,
        removeAllHistory
    }

}