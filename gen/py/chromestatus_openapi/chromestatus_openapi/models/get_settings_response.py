from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from chromestatus_openapi.models.base_model import Model
from chromestatus_openapi import util


class GetSettingsResponse(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, notify_as_starrer=None):  # noqa: E501
        """GetSettingsResponse - a model defined in OpenAPI

        :param notify_as_starrer: The notify_as_starrer of this GetSettingsResponse.  # noqa: E501
        :type notify_as_starrer: bool
        """
        self.openapi_types = {
            'notify_as_starrer': bool
        }

        self.attribute_map = {
            'notify_as_starrer': 'notify_as_starrer'
        }

        self._notify_as_starrer = notify_as_starrer

    @classmethod
    def from_dict(cls, dikt) -> 'GetSettingsResponse':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The GetSettingsResponse of this GetSettingsResponse.  # noqa: E501
        :rtype: GetSettingsResponse
        """
        return util.deserialize_model(dikt, cls)

    @property
    def notify_as_starrer(self) -> bool:
        """Gets the notify_as_starrer of this GetSettingsResponse.


        :return: The notify_as_starrer of this GetSettingsResponse.
        :rtype: bool
        """
        return self._notify_as_starrer

    @notify_as_starrer.setter
    def notify_as_starrer(self, notify_as_starrer: bool):
        """Sets the notify_as_starrer of this GetSettingsResponse.


        :param notify_as_starrer: The notify_as_starrer of this GetSettingsResponse.
        :type notify_as_starrer: bool
        """
        if notify_as_starrer is None:
            raise ValueError("Invalid value for `notify_as_starrer`, must not be `None`")  # noqa: E501

        self._notify_as_starrer = notify_as_starrer